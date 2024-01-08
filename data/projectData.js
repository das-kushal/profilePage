import compileExpress from '../src/assets/compileExpressImg.png'
import PersistentStack from '../src/assets/PersistentStack.png'


const projectData = [
    {
        id: '1',
        name: 'MealApp',
        desc: `

> This is a meal app which is built using React Native and TailwindCSS is used to styling and sanity.io CMS is used for backend part because we can keep the data organised


        `,
        githubLink: 'https://github.com/das-kushal/MealApp',
        iconLink: 'https://github.com/das-kushal/Coding-Ninjas-LeetCode-Font-Changer/blob/main/favFInal.png?raw=true',
        icon: '',
        skills: ['React Native','TailwindCSS (NativeWind)','Redux','React Navigation']


    },


    {
        id: '2',
        name: 'Survey on Persistent Data Structures',
        desc: `
My 5 team members along with me did a mini project, a kind of research on persistent data structures like arrays, stacks and queues, linked lists.
### We explored the pointer model under the guidance of our esteemed Professor Chandan Mazumdar
And we also implemented different persistent data structures like arrays, stacks and queues, linked lists using the pointer model
And we also used a directed acyclic graph to implement the persistent stack .
        `,

        githubLink: 'https://github.com/das-kushal/Persistent_Stack',
        iconLink: '',
        icon: PersistentStack,
        skills: ['Data Structures','C++','Algorithms']
    },
    {
        id: '3',
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
        skills: ['HTML','CSS','Javascript','Chrome Extension']


    },

]

export default projectData