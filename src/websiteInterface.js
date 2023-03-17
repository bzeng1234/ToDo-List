import { toDo } from './todo';
import { project } from './project';

export let websiteInterface = () => {

    let projectList = [];

    let updateProjects = (projectLists) => {
        projectList.push(projectLists);
        console.log(projectList);
    };

    let clearContentScreen = () => {
        let todoListElem = document.querySelector('.todo-list');
        todoListElem.replaceChildren();
    };

    let addToContentScreen = (todoItem) => {
        let newItem = document.createElement('li');
        newItem.classList.add('todo-items');
        newItem.textContent = `${todoItem.name} : ${todoItem.description}`;
        
        let todoListElem = document.querySelector('.todo-list');
        todoListElem.appendChild(newItem);
    };

    let updateContent = (project) => {
        let todoTitle = document.querySelector('.todo-title');
        todoTitle.textContent = project.name;
        clearContentScreen();
        project.list.forEach(todoItem => {
            addToContentScreen(todoItem);
        });
    };
    let initInbox = () => {
        let inboxElem = document.getElementById('Inbox');
        console.log(inboxElem);

        inboxElem.addEventListener('click', (e) => {
            let project = projectList.find(element => element.name === 'Inbox');
            updateContent(project);
        });
    }

    let initToday = () => {
        let todayElem = document.getElementById('Today');
        console.log(todayElem);

        todayElem.addEventListener('click', (e) => {
            console.log(todayElem);
        });
    };

    let initWeek = () => {
        let weekElem = document.getElementById('Week');
        console.log(weekElem);

        weekElem.addEventListener('click', (e) => {
            console.log(weekElem);
        });
    };

    let initCompleted = () => {
        let completeElem = document.getElementById('Completed');
        console.log(completeElem);

        completeElem.addEventListener('click', (e) => {
            console.log(completeElem);
        });
    };

    let createNewProj = () => {
        let newProjName = document.getElementById('proj-input');
        console.log(newProjName.value);

        let newProjElem = document.createElement('li');
        newProjElem.classList.add('project');
        newProjElem.innerHTML = newProjName.value;

        let projListElem = document.querySelector('.project-list');
        projListElem.appendChild(newProjElem);

        projectList.push(project(newProjName.value));
    };

    let clearInput = () => {
        let projInputElem = document.getElementById('proj-input');
        projInputElem.value = "";
    };
    
    let initProjectForm = () => {
        let addProjBtn = document.querySelector('.add-proj-btn');
        addProjBtn.addEventListener('click', (e) => {
            e.preventDefault();

            createNewProj();
            clearInput();
            initProjList();
        });

        let clearProjBtn = document.querySelector('.clear-proj-btn');
        clearProjBtn.addEventListener('click', (e) => {
            e.preventDefault();

            clearInput();
        });
    };

    let initProjList = () => {
        let projListElem = document.querySelectorAll('.project');


        projListElem.forEach(element => {
            element.addEventListener('click', (e) => {
                let proj = projectList.find(elem => elem.name === e.target.textContent);
                updateContent(proj);
            });
        });
    };

    let initSidebar = () => {

        // initialize top side bar buttons
        initInbox();
        initToday();
        initWeek();
        initCompleted();

        // initalize project form for adding new projects
        initProjectForm();
        initProjList();
    };

    let initWebsite = () => {
        let defaultProj = project('Inbox');
        defaultProj.addToList(toDo('get milk','go to the grocery store','03/15/2022','high'));
        projectList.push(defaultProj);
        initSidebar();
    };

    
    
    return {projectList, updateProjects, initWebsite, initSidebar};
};