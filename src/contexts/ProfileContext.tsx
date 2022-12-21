import { createContext, useContext, Dispatch, SetStateAction } from 'react';
import { IUser } from '../types';

type ProfileContextTYpe = [IUser, Dispatch<SetStateAction<IUser>>];

const ProfileContext = createContext<ProfileContextTYpe>([null, () => null]);

export const ProfileContextProvider = ProfileContext.Provider;

export const useProfileContext = () => {
  useContext(ProfileContext);
};
