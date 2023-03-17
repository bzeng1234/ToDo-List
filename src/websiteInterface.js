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
    }
    
    let initProjectForm = () => {
        let addProjBtn = document.querySelector('.add-proj-btn');
        addProjBtn.addEventListener('click', (e) => {
            e.preventDefault();

            createNewProj();
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
    };

    let initWebsite = () => {
        initSidebar();
    };

    

    return {projectList, updateProjects, initWebsite, initSidebar};
};