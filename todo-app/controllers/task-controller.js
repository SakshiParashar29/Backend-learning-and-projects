const prisma = require('../config/db');


// Create Task
const createTask = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const task = await prisma.todo.create({
            data: {
                title
            }
        });

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating task",
            error: error.message
        });
    }
};



// Get All Tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await prisma.todo.findMany();

        if (tasks.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No tasks found",
                data: []
            });
        }

        return res.status(200).json({
            success: true,
            data: tasks
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching tasks",
            error: error.message
        });
    }
};



// Get Task By ID
const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Invalid task id"
            });
        }

        const task = await prisma.todo.findUnique({
            where: {
                id: Number(id)
            }
        });


        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }


        return res.status(200).json({
            success: true,
            data: task
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching task",
            error: error.message
        });
    }
};




// Update Task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;


        const task = await prisma.todo.findUnique({
            where: {
                id: Number(id)
            }
        });


        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }


        const updatedTask = await prisma.todo.update({
            where: {
                id: Number(id)
            },
            data: {
                completed: !task.completed
            }
        });


        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: updatedTask
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating task",
            error: error.message
        });
    }
};





// Delete Task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;


        const task = await prisma.todo.findUnique({
            where: {
                id: Number(id)
            }
        });


        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }


        await prisma.todo.delete({
            where: {
                id: Number(id)
            }
        });


        return res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting task",
            error: error.message
        });
    }
};



module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};