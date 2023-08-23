import compileExpress from '../src/assets/compileExpressImg.png'
import PersistentStack from '../src/assets/PersistentStack.png'


const projectData = [
    {
        id: '1',
        name: 'Coding-Ninjas-LeetCode-Font-Changer',
        desc: `

> This is a chrome extension which helps one to change the font of editor of leetcode and coding ninjas and also the letter spacing

### In this extension I have used html, css and javascript
- I have given the permisions for activeTab and tabs and storage to identify the coding ninjas' tab and leetcode tab and only work in those
- In the rest of the tabs it detects and displays that the extension only works for leetcode and coding ninjas tabs
- For persistent storage I have used localStorage
        `,
        githubLink: 'https://github.com/das-kushal/Coding-Ninjas-LeetCode-Font-Changer',
        iconLink: 'https://github.com/das-kushal/Coding-Ninjas-LeetCode-Font-Changer/blob/main/favFInal.png?raw=true',
        icon: '',
        skills:['HTML','CSS','Javascript','Chrome Extension']


    },
    {
        id: '2',
        name: 'CompileXpress',
        desc: `#### This is CompileXpress which allows anyone to write some code and execute it and get the result 
#### In this app you will get
- Editor to write your code
- Small terminal to see the output
- Light and dark theme changer
- settings to change the fontsize, tabSpace, font Family and word wrap
- Also you can change language, presently only 3 languages are supported - C++, Python, Javascript
- You can also set the default language and it is persistent even if you refresh the page
 `,
        githubLink: 'https://github.com/das-kushal/CompileXpress',
        iconLink: 'https://raw.githubusercontent.com/das-kushal/CompileXpress/main/frontend/public/favicon.ico',
        icon: compileExpress,
        skills:['React.Js','Express.Js']
    },
    {
        id: '3',
        name:'Survey on Persistent Data Structures',
        desc:`
My 5 team members along with me did a mini project, a kind of research on persistent data structures like arrays, stacks and queues, linked lists.
### We explored the pointer model under the guidance of our esteemed Professor Chandan Mazumdar
And we also implemented different persistent data structures like arrays, stacks and queues, linked lists using the pointer model
And we also used a directed acyclic graph to implement the persistent stack .
        `,

        githubLink: 'https://github.com/das-kushal/Persistent_Stack',
        iconLink:'',
        icon:PersistentStack,
        skills:['Data Structures','C++','Algotithms']
    },
    
]

export default projectData