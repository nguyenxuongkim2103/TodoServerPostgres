import { Request, Response, NextFunction } from "express";

import UserService from "../service/user.service";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await UserService.findAllUser();

    return res.status(200).json(allUser);
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const user = await UserService.findUser(id);

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.createUser(req.body);

    return res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const data = req.body;
    const updateUser = await UserService.updateUser(data, userId);

    return res.status(200).json(updateUser);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    await UserService.deleteUser(userId);

    res.status(204).end();
  } catch (error) {
    console.error(error);
  }
};

export { getAllUser, getUser, createUser, updateUser, deleteUser };
