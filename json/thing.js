// import React, { useEffect, useState } from "react";

// const fetchdata = async () => {
//   try {
//     const response = await fetch(
//       "https://www.reddit.com/r/upliftingnews.json?raw_json=1&limit=10"
//     );
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const client_id = "t_p4BYIcQvOCUxsjkYfkeg";
// const client_secret = "47mmPlJujtltHszVMWVTBxehgt79Yg";
// const fetchdathing = async () => {
//   const url = `https://www.reddit.com/api/v1/authorize?api_key&client_id=${client_id}&redirect_uri=http://localhost:3000/&response_type=code&scope=identity&state=PUT_ANY_STRING_HERE`;
//   window.location.replace(url);
// };
// export const Homepage = () => {
//   const [key, setKey] = useState("");
//   const getData = () => {
//     const linkMatch = window.location.href.match(/code=([^&]*)/);
//     setKey(linkMatch[1].slice(0, -2));
//   };
//   const getAccess = async () => {
//     const headers = { "Content-type": "application/json", apikey: client_id };
//     console.log(headers);
//     try {
//       const response = await fetch(
//         "https://www.reddit.com/api/v1/access_token",
//         {
//           method: "POST",
//           headers: {
//             "Content-type": "application/x-www-form-urlencoded",
//           },
//           auth: {
//             username: client_id,
//             password: client_secret,
//           },
//           data: `grant_type=authorization_code&code=${key}&redirect_uri=http://localhost:3000/`,
//         }
//       );
//       const data = await response.json();
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div>
//       <h1 onClick={getAccess}>{key}</h1>
//       <button onClick={getData}>getData</button>
//       <h1 onClick={fetchdathing}>hello there</h1>
//     </div>
//   );
// };
// {
//   title: value.data.title,
//   id: value.data.id,
//   score: value.data.score,
//   originalLink: value.data.permalink,
//   numComments: value.data.num_comments,
//   isVideo: value.data.is_video,
//   source: value.data.url,
//   media: value.data.media,
//   author: value.data.author,
//   subReddit: value.data.subreddit_name_prefixed,
// }

// https://www.reddit.com/search.json?q=cake%20recipes.json
