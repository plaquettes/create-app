export const identify = 'create-app';
export const VISUAL = 'visual';

export const getRegisterCommandName = (key: string, id = identify) =>`${id}.${key}`;
