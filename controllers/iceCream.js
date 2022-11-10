var IceCream = require('../models/iceCream'); 
 
// List of all IceCream

    exports.iceCream_list = async function(req, res) { 
        try{ 
            theIceCreams = await IceCream.find(); 
            res.send(theIceCreams); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
    }; 

    exports.iceCream_view_all_Page = async function(req, res) { 
        try{ 
            theIceCreams = await iceCream.find(); 
            res.render('iceCreams', { title: 'IceCream Search Results', results: theIceCreams }); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
    }; 
     
// for a specific IceCream. 
exports.iceCream_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: IceCream detail: ' + req.params.id); 
}; 
 
// Handle IceCream create on POST. 
exports.iceCream_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: IceCream create POST'); 
}; 
 
// Handle IceCream delete form on DELETE. 
exports.iceCream_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: IceCream delete DELETE ' + req.params.id); 
}; 
 
// Handle IceCream update form on PUT. 
exports.iceCream_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: IceCream update PUT' + req.params.id); 
}; 