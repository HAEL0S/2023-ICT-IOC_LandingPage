"use strict";
import {LoadSpeakers} from './speakers.js';

/* data */
const speakers = LoadSpeakers();
shuffle(speakers);
    
/* ======= Header animation ======= */   
const header = document.getElementById('header');  

renderStats();
renderSpeakerSection();
renderSessions();
registerModalHandler();

window.onload=function() 
{   
    headerAnimation();
};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 100 ) {	    
	    header.classList.add('header-shrink');    
	    	    
	} else {
	    header.classList.remove('header-shrink');
	}

};

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 69; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});
    

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header


// Initialize Gumshoe
var spy = new Gumshoe('#navigation a', {
	offset: 69 //page .header heights
});


/* ======= Countdown ========= */
// set the date we're counting down to
var target_date = new Date("Jan 21, 2022").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown =  document.getElementById("countdown-box");
var days_span = document.createElement("SPAN");
days_span.className = 'days';
countdown.appendChild(days_span);
var hours_span = document.createElement("SPAN");
hours_span.className = 'hours';
countdown.appendChild(hours_span);
var minutes_span = document.createElement("SPAN");
minutes_span.className = 'minutes';
countdown.appendChild(minutes_span);
var secs_span = document.createElement("SPAN");
secs_span.className = 'secs';
countdown.appendChild(secs_span);
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value.
    days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">일</span>';
    hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">시간</span>';
    minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">분</span>';
    secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">초</span>'; 
 
}, 1000);

/* ==== ==== */
function renderSpeakerSection() {

    var speakersView = document.getElementById("speakers-section-row");
    var speakerViewTemplate = document.querySelector('#template-speaker-item');

    for(var speaker of speakers)
    {
        var speakerView = document.importNode(speakerViewTemplate.content, true);
        speakerView.getElementById("speaker-name").innerHTML = speaker.name;
        speakerView.getElementById("speaker-position").innerHTML = speaker.position;
        speakerView.getElementById("speaker-company").innerHTML = speaker.company;
        speakerView.getElementById("speaker-pic").setAttribute("src", speaker.pic);
        speakerView.getElementById("speaker-pic-container").setAttribute("data-index", speakers.indexOf(speaker));
        speakerView.getElementById("read-more").setAttribute("data-index", speakers.indexOf(speaker));
        
        var snsListView = speakerView.getElementById("speaker-sns-list");
        for(var snsUrl of speaker.sns){
            var snsView = renderSnsView(snsUrl);
            snsListView.appendChild(snsView);
        }

        speakersView.appendChild(speakerView);
    }
}

function renderSessions()
{
    var scheduleView = document.getElementById("session-list");
    var sessionTemplate = document.querySelector('#template-session');

    for(var speaker of speakers)
    {
        for(var session of speaker.sessions)
        {
            var sessionView = document.importNode(sessionTemplate.content, true);
            sessionView.getElementById("session-speaker-name").innerHTML = speaker.name;
            sessionView.getElementById("session-speaker-pic").setAttribute("src", speaker.pic);

            sessionView.getElementById("session-title").innerHTML = session.title;
            sessionView.getElementById("session-category").innerHTML = session.category;
            sessionView.getElementById("session-description").innerHTML = session.description;
            sessionView.getElementById("session-salespoint").innerHTML = session.salespoint;
            sessionView.getElementById("session-level").innerHTML = translateSessionLevel(session.level);
            
            sessionView.getElementById("session-speaker-pic-container").setAttribute("data-index", speakers.indexOf(speaker));
            sessionView.getElementById("session-speaker-name").setAttribute("data-index", speakers.indexOf(speaker));

            scheduleView.appendChild(sessionView);
        }
    }
}

function registerModalHandler() {
    document.getElementById('modal-speaker-1').addEventListener('show.bs.modal', function (arg) {
        var indexOfSpeakers = arg.relatedTarget.dataset['index'];
        fillSpeakerDataOnModal(speakers[indexOfSpeakers]);
    });
}

function fillSpeakerDataOnModal(speaker) {
    var modal = document.getElementById("modal-speaker-1").getRootNode();
    modal.getElementById("modal-speaker-name").innerHTML = speaker.name;
    modal.getElementById("modal-speaker-position").innerHTML = speaker.position;
    modal.getElementById("modal-speaker-company").innerHTML = speaker.company;
    modal.getElementById("modal-speaker-pic").setAttribute("src", speaker.pic);
    modal.getElementById("modal-speaker-introduction").innerHTML = speaker.introduction;

    var snsListView = modal.getElementById("modal-speaker-sns-list");
    snsListView.innerHTML = "";
    for(var snsUrl of speaker.sns){
        var snsView = renderSnsView(snsUrl);
        snsListView.appendChild(snsView);
    }
}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function renderSnsView(snsUrl)
{
    var element = document.createElement("li");
    element.setAttribute("class", "list-inline-item");

    if (snsUrl.startsWith("https://www.facebook.com"))
        element.innerHTML = '<a  href="'+ snsUrl + '"><i class="fab fa-facebook fa-fw"></i></a>';
    else if (snsUrl.startsWith("https://github.com"))
        element.innerHTML = '<a  href="'+ snsUrl + '"><i class="fab fa-github fa-fw"></i></a>';
    else if (snsUrl.startsWith("https://www.twitter.com"))
        element.innerHTML = '<a  href="'+ snsUrl + '"><i class="fab fa-twitter fa-fw"></i></a>';
    else if (snsUrl.startsWith("https://medium"))
        element.innerHTML = '<a  href="'+ snsUrl + '"><i class="fab fa-medium fa-fw"></i></a>';
    else if (snsUrl.startsWith("https://www.youtube."))
        element.innerHTML = '<a  href="'+ snsUrl + '"><i class="fab fa-youtube fa-fw"></i></a>';
    else if (snsUrl.startsWith("https://dev.grapecity"))
        element.innerHTML = '<a  href="'+ snsUrl + '"><i class="fas fa-building fa-fw"></i></a>';
    else
        element.innerHTML = '<a  href="'+ snsUrl + '"><i class="fa fa-cloud fa-fw"></i></a>';

    return element;
}

function translateSessionLevel(level)
{
    switch(level)
    {
        case 0: return "누구나 들으실 수 있어요.";
        case 1: return "처음 배우시는 분께 추천 드려요.";
        case 2: return "주제에 친숙하신 분께 추천 드려요.";
        case 3: return "실무에서 개발하시는 분께 추천 드려요.";
        case 4: return "전문가를 위해 추천 드려요.";
    }
}

function renderStats() {
    document.getElementById("num-of-speakers").innerHTML = speakers.length;
    document.getElementById("num-of-sessions").innerHTML = speakers.length;
}