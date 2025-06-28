// When we are using LocalStorage
const employees = [
    {
        id: 1,
        name: "John Doe",
        email: "employee1@example.com",
        password: "123",
        taskCount: {
            total: 2,
            active: 0,
            completed: 0,
            failed: 1,
            newTask: 1
        },
        tasks: [
            {
                active: false,
                failed: false,
                newTask: true,
                completed: false,
                taskTitle: "Prepare Report",
                taskDescription: "Compile and prepare the monthly financial report.",
                taskDate: "2025-06-27",
                category: "Finance"
            },
            {
                active: false,
                failed: true,
                newTask: false,
                completed: false,
                taskTitle: "Client Follow-up",
                taskDescription: "Contact client to renew service contract.",
                taskDate: "2025-06-25",
                category: "Sales"
            }
        ]
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "employee2@example.com",
        password: "123",
        taskCount: {
            total: 1,
            active: 0,
            completed: 0,
            failed: 0,
            newTask: 1
        },
        tasks: [
            {
                active: false,
                failed: false,
                newTask: true,
                completed: false,
                taskTitle: "UI Redesign",
                taskDescription: "Redesign the dashboard interface for better UX.",
                taskDate: "2025-06-28",
                category: "Design"
            }
        ]
    },
    {
        id: 3,
        name: "Alice Jones",
        email: "employee3@example.com",
        password: "123",
        taskCount: {
            total: 1,
            active: 0,
            completed: 1,
            failed: 0,
            newTask: 0
        },
        tasks: [
            {
                active: false,
                failed: false,
                newTask: false,
                completed: true,
                taskTitle: "Update API",
                taskDescription: "Upgrade the payment gateway to v2.0.",
                taskDate: "2025-06-20",
                category: "Development"
            }
        ]
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "employee4@example.com",
        password: "123",
        taskCount: {
            total: 2,
            active: 0,
            completed: 1,
            failed: 0,
            newTask: 1
        },
        tasks: [
            {
                active: false,
                failed: false,
                newTask: true,
                completed: false,
                taskTitle: "Security Audit",
                taskDescription: "Perform internal security audit on microservices.",
                taskDate: "2025-06-29",
                category: "IT"
            },
            {
                active: false,
                failed: false,
                newTask: false,
                completed: true,
                taskTitle: "Bug Fixes",
                taskDescription: "Resolve issues reported on login and signup pages.",
                taskDate: "2025-06-24",
                category: "Development"
            }
        ]
    },
    {
        id: 5,
        name: "Emma Wilson",
        email: "employee5@example.com",
        password: "123",
        taskCount: {
            total: 1,
            active: 0,
            completed: 0,
            failed: 1,
            newTask: 0
        },
        tasks: [
            {
                active: false,
                failed: true,
                newTask: false,
                completed: false,
                taskTitle: "Campaign Analysis",
                taskDescription: "Evaluate and report on the ad campaign results.",
                taskDate: "2025-06-23",
                category: "Marketing"
            }
        ]
    }
];

const admin = [
    {
        "id": 100,
        "name":"Admin",
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage=(updatedEmployees=[])=>{
    localStorage.setItem("employees",JSON.stringify([...employees,...updatedEmployees]));
    localStorage.setItem("admin",JSON.stringify(admin));
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"));
    const admin=JSON.parse(localStorage.getItem("admin"));
    return {employees,admin}
    // console.log(employees,admin);
}