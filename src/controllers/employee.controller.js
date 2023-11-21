//start of initialize
'use strict';
const Employee = require('../models/employee.model');
//end of initialize

// controller code for querying all entries
exports.findAll = function(req, res){
   Employee.findAll(function(err, employee){
    console.log('controller')
    if (err){
        res.send(err);
    }
    console.log('res', employee);
    res.send({status: 200, data: employee});

   });
}

//controller code for adding an entry to the DB
exports.create = function(req, res){
    const new_employee = new Employee(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    }else {
        Employee.create(new_employee, function(err, employee){   
            if (err){
                res.send(err);
            }
            res.json({error:false, status: 200, message:"Employee added successfully!", data:employee});
        });
    }
};

//controller code for querying a single entry from the DB using ID
exports.findById = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        if (err){ 
            res.send(err);
        }
        res.json({status: 200, data: employee});
    });
};

//controller code for updating a single entry from the DB
exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error: true, message: 'Please provide all required field' });

    }else {
        Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
            if (err){
                res.send(err);
            }
            res.json({ error: false, message: 'Employee successfully updated', status: 200});
        });

    }
};

//controller code for deletion
exports.delete = function(req, res) {
    Employee.delete( req.params.id, function(err, employee){
        if (err){
            res.send(err);
        }
        res.json({ error: false, message: 'Employee successfully deleted', status: 200 });
    });

};




