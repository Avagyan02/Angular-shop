import cors from 'cors';
import express from 'express';
import productRouter from './api/product/index';
import categoryRouter from './api/category/index';
import authRouter from './api/auth/index';

const app = express(); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/auth', authRouter);

export default app;