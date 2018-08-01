const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcoin de la tarea por hacer'
};
const completado = {
    defaut: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Creamos una nueva tarea aqui!', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un tarea!', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}