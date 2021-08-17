export const secret = "47mmPlJujtltHszVMWVTBxehgt79Yg";
const redirectURI = "http://localhost:3000/";
const clientID = "8KleB4zsQqF7L3d7HTnXKQ";
export const USER = {
  info: {
    accessToken: "",
  },
  authorize() {
    const url = `https://www.reddit.com/api/v1/authorize?api_key&client_id=${clientID}
     &redirect_uri=${redirectURI}&response_type=code&scope=identity&state=anystring`;
    window.location.replace(url);
  },
};
