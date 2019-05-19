const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Auth route
// @access  Public
router.get('/', auth, async (req, res) => {
    try {

        // Get user data without password field
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/', [
    check('email', 'please include a valid email').isEmail(),
    check('password', 
    'password is required')
        .exists()
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email });

        if (!user) {
            return res
                .status(400)
                .json({errors: [{ msg: 'Invalid credentials' }] });
        }

        // Match email and password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        


        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload, 
            config.get('jwtToken'),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
 
        // End
        //res.send('User registered');

        } catch (err) {
            console.error(err.message);  
            req.status(500).send('Server error');
    }
});

module.exports = router;
