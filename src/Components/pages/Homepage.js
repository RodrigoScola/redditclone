import React, { useEffect, useState } from "react";
import { Posts } from "../../Components/Features/Post/Posts";
import { Navbar } from "../Features/Navbar/navbar";
import { Post } from "../Features/Post/post";
export const Homepage = () => {
  const [data, setData] = useState();
  const [title, setTitle] = useState("default");
  const fetchLink = "https://www.reddit.com/search.json?q=cake.json";
  let searchTerm;
  const fetchData = async () => {
    searchTerm = title.replace(" ", "%20");
    fetch(`https://www.reddit.com/search.json?q=${searchTerm}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setData(
          jsonResponse.data.children.map((value) => {
            return {
              awards: value.data.all_awardings,
              author: value.data.author,
              createAt: {
                created: value.data.created,
                created_utc: value.data.created_utc,
              },
              flairs: {
                richText: value.data.author_flair_richtext,
                text: value.data.author_flair_text,
                color: value.data.author.author_flair_text_color,
              },
              id: value.data.id,
              media: value.data.media,
              numComments: value.data.num_comments,
              originalLink: value.data.permalink,
              title: value.data.title,
              score: value.data.score,
              source: value.data.url,
              subReddit: value.data.subreddit_name_prefixed,
            };
          })
        );
        // console.log(jsonResponse.data.children);
      });
  };
  const submitData = (e) => {
    e.preventDefault();
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <h1>{searchTerm}</h1>
      <Navbar getSearchResults={submitData} title={title} setTitle={setTitle} />
      <main>{data && <Posts data={data} />}</main>
    </div>
  );
};
