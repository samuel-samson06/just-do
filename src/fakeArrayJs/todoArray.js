const date = new Date()
const idCaps = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,K,Y,Z'.split(',')
const idSmall = 'a,b,c,d,e,f,g,h,i,j,k,l,m,o,n,p,q,r,s,t,u,v,w,x,y,z'.split(',')
const idNum = '1,2,3,4,5,6,7,8,9,0'.split(",")


export const todoRefrenceArray=[
    {
        task_name:'Work',
        date: date.toLocaleDateString(),
        priority: 'low',
        organization: 'work',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Pick up Work Lunch',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Document Company Ledger',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Fix Company Resume',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }],
    },
    {
        task_name:'Code LifeStyle',
        date: date.toLocaleDateString(),
        priority: 'high',
        organization: 'personal',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Complete Apple Web Personal Project',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Attending personal Meeting By 4',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Hacker rank Code Challenge 1190',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Fix Bug in Zachs Python Project',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }],
    },
    {
        task_name:'Garden',
        date: date.toLocaleDateString(),
        priority: 'medium',
        organization: 'leisure',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Water Plants ',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Trim trees',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Plant Habiscus seeds',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Cut down Oak Tree',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }],
    },
    {
        task_name:'Company',
        date: date.toLocaleDateString(),
        priority: 'medium',
        organization: 'Work',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Update web analytics responses',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Build Backend Files',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Push Frontend Project to git',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Update junior devs about upcoming features ',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Recruit penetration tester',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Fix Personal Portfolio animation bug',
            isComplete: false,
            id:`${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }
    ],
    },
    {
        task_name:'Fashion',
        date: date.toLocaleDateString(),
        priority: 'high',
        organization: 'personal',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Make 30 designs',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Find Models',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Pre-Fashion Party',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Pay out Fashion Dept hold up',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }],
    },
    {
        task_name:'Date',
        date: date.toLocaleDateString(),
        priority: 'medium',
        organization: 'personal',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Resturant',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'House Hold meal',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Get Wine',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }],
    },
    {
        task_name:'Self',
        date: date.toLocaleDateString(),
        priority: 'low',
        organization: 'personal',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Watch a movie',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Go on a date',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }],
    },
    {
        task_name:'School Work',
        date: date.toLocaleDateString(),
        priority: 'medium',
        organization: 'school',
        id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`,
        tasks: [{
            task_name: 'Read For STA test',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Review MTH 101',
            isComplete: false,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        },{
            task_name: 'Pay out Fashion Dept hold up',
            isComplete: true,
            id: `${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idSmall[Math.floor(Math.random()*idSmall.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}${idCaps[Math.floor(Math.random()*idCaps.length)]}${idNum[Math.floor(Math.random()*idNum.length)]}`
        }],
    }
]
