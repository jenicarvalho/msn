const express = require('express')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

const router = express.Router()
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

const userRoute = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password, subnick } = req.body

    try {
      // See if user exists
      let user = await User.findOne({ email })
      if(user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists'}] })
      }

      // Get gravatar
      const avatar = gravatar.url( email, { s: '200', r: 'pg', d: 'mm' })

      user = new User({ name, email, avatar, password, subnick })

      // Encrypt password
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      // Save in database
      await user.save()
  
      // Create JWT
      const payload = { user: { id: user.id } }
      const jwtConfig = { expiresIn: 36000 } 
      const jwtSecret = config.get('jwtSecret')

      jwt.sign(payload, jwtSecret, jwtConfig, (error, token) => {
        if(error) throw error

        res.json({ token })
      })

    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server error')      
    }
}

const checkErrors = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid e-mail').isEmail(),
  check('password', 'Please add a password with more than 6 characters').isLength({ min: 6})
]

// POST api/users
router.post('/', checkErrors, async (req, res) => userRoute(req,res) )

module.exports = router