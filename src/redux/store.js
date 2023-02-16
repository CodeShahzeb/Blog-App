import { legacy_createStore as createStore, combineReducers } from 'redux';
import blogReducer from './reducers/blogReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const mainReducer = combineReducers({
    blog: blogReducer
})

const commonData = {
    blog: {
        items: [
            {
                id: 1,
                blogName: 'Java Language',
                blogDetail: 'Java is a popular programming language.Java is used to develop mobile apps, web apps, desktop apps, games and much more.',
                like: []

            },

            {
                id: 2,
                blogName: 'Python Language',
                blogDetail: 'Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.Python can be used on a server to create web applications.Python can be used alongside software to create workflows.Python can connect to database systems. It can also read and modify files. Python can be used to handle big data and perform complex mathematics.Python can be used for rapid prototyping, or for production-ready software development.',
                like: []

            },

            {
                id: 3,
                blogName: 'Android Develpement',
                blogDetail: 'Android operating system is the largest installed base among various mobile platforms across the globe. Hundreds of millions of mobile devices are powered by Android in more than 190 countries of the world. It conquered around 71% of the global market share by the end of 2021, and this trend is growing bigger every other day. The company named Open Handset Alliance developed Android for the first time that is based on the modified version of the Linux kernel and other open-source software. Google sponsored the project at initial stages and in the year 2005, it acquired the whole company.',
                like: []

            },
            {
                id: 4,
                blogName: 'Swift Language',
                blogDetail: 'Swift is a fantastic way to write software, whether it’s for phones, desktops, servers, or anything else that runs code. It’s a safe, fast, and interactive programming language that combines the best in modern language thinking with wisdom from the wider Apple engineering culture and the diverse contributions from its open-source community. The compiler is optimized for performance and the language is optimized for development, without compromising on either.',
                like: []

            }
        ]
    }
}

const store = createStore(mainReducer, commonData, composeWithDevTools())

export default store