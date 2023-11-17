import { memo } from 'react'

function Utterances() {
    return (
        <section 
            ref={(element) => {
                if (!element) return

                const scriptElement = document.createElement('script');
                scriptElement.src = "https://utteranc.es/client.js";
                scriptElement.async = true;
                scriptElement.setAttribute('repo', "tigger-cherground/study-nextjs-blog");
                scriptElement.setAttribute('issue-term', "pathname");
                scriptElement.setAttribute('theme', "github-dark-orange");
                scriptElement.crossorigin = "anonymous";
                element.appendChild(scriptElement);
            }}  
        />
    )
}

export default memo(Utterances)