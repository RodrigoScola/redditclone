import React, { useEffect, useState } from "react";
import { Posts } from "../../Components/Features/Post/Posts";
import { baseLink } from "../../REDDIT";
import { Navbar } from "../Features/Navbar/navbar";
export const Homepage = () => {
  const [data, setData] = useState();
  const [title, setTitle] = useState("");
  let searchTerm;
  const fetchData = async (link) => {
    searchTerm = title.replace(" ", "%20");
    fetch(link, {
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
        console.log(jsonResponse.data.children);
      });
  };
  const submitData = (e) => {
    e.preventDefault();
    fetchData(`https://www.reddit.com/search.json?q=${searchTerm}`);
  };
  useEffect(() => {
    fetchData(`${baseLink}.json`);
  }, [searchTerm]);

  return (
    <div>
      <h1>{searchTerm}</h1>
      <Navbar getSearchResults={submitData} title={title} setTitle={setTitle} />
      <main>{data && <Posts data={data} />}</main>
    </div>
  );
};
