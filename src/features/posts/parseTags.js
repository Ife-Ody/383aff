const reactStringReplace = require("react-string-replace");

export default function parseTags(text, platform) {
  let replacedText;
 switch (platform) {
   case "Twitter":
     // Match URLs
     replacedText = reactStringReplace(
       text,
       /(https?:\/\/\S+)/g,
       (match, i) => (
         <a
           className="text-red-500"
           key={match + i}
           href={match}
           target="_blank"
           rel="noreferrer"
         >
           {match}
         </a>
       )
     );

     // Match @-mentions
     replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
       <a
         className="text-red-500"
         key={match + i}
         href={`https://twitter.com/${match}`}
         target="_blank"
         rel="noreferrer"
       >
         @{match}
       </a>
     ));

     // Match hashtags
     replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
       <a
         className="text-red-500"
         key={match + i}
         href={`https://twitter.com/hashtag/${match}`}
         target="_blank"
         rel="noreferrer"
       >
         #{match}
       </a>
     ));
     break;
   case "Instagram":
     // Match URLs
     replacedText = reactStringReplace(
       text,
       /(https?:\/\/\S+)/g,
       (match, i) => (
         <a
           className="text-red-500"
           key={match + i}
           href={match}
           target="_blank"
           rel="noreferrer"
         >
           {match}
         </a>
       )
     );

     // Match @-mentions
     replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
       <a
         className="text-red-500"
         key={match + i}
         href={`https://www.instagram.com/${match}`}
         target="_blank"
         rel="noreferrer"
       >
         @{match}
       </a>
     ));

     // Match hashtags
     replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
       <a
         className="text-red-500"
         key={match + i}
         href={`https://www.instagram.com/explore/tags/${match}`}
         target="_blank"
         rel="noreferrer"
       >
         #{match}
       </a>
     ));
     break;

   default:
     replacedText = String(text)
     break;
 }
  
  return replacedText
}
