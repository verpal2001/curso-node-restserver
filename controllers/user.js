const { response } = require('express');

const usuariosGet = (req, res = response ) => {

    const {q} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q
    })
};

const usuariosPost = (req, res = response) => {

    const {nombre , edad} = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        nombre , edad
    })
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controlador',
        id
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    })
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controlador'
    })
};

module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}