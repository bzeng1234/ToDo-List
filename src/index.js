import './styles.css';
import { toDo } from './todo';
import { project } from './project';
import { websiteInterface } from './websiteInterface';

let defaultProj = project('Inbox');
defaultProj.addToList(toDo('get milk','go to the grocery store','03/15/2022','high'));

let websiteintf = websiteInterface();
websiteintf.updateProjects(defaultProj);
websiteintf.initWebsite();
