import { Message } from 'src/types';
import { AddChat, AddMessage, DeleteChat } from './types';

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';

export const addChat = (chatName: string): AddChat => ({
  type: ADD_CHAT,
  chatName,
});

export const addMessage = (
  chatId: string,
  newMessage: Message
): AddMessage => ({
  type: ADD_MESSAGE,
  chatId,
  newMessage,
});

export const deleteChat = (chatId: string): DeleteChat => ({
  type: DELETE_CHAT,
  chatId,
});