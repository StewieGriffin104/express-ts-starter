export const checkEnv = (envList: string[]) => {
  envList.forEach((env) => {
    if (!process.env[env]) {
      throw new Error(`Environment variable ${env} is missing`);
    }
  });
};
