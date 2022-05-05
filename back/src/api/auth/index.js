import express from 'express';
import signUp from "./services/signUp";
import verify from './services/verify';
import restore from './services/restore';
import signIn from './services/signIn';
import restoreVerify from './services/restoreVerify';
import validateAuth from "./validation/validateAuth";
import validateVerifyAndRestore from './validation/validateVerifyAndRestore';
import validateSignIn from './validation/validateSignIn';

const router = express.Router();

router
  .post('', validateAuth, signUp)

router  
  .post('/verify', validateVerifyAndRestore, verify)

router
  .post('/restore', validateVerifyAndRestore, restore)

router
  .post('/restore/verify', validateVerifyAndRestore, restoreVerify)  

router  
  .post('/login', validateSignIn, signIn);

export default router;
