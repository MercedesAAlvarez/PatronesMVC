

module.exports = {
    jom : (req,res) => {
       return res.render('home') /* retorna el home */

    },
    abaut: (req,res) => {
        return res.render('about') /* retorna el about */

    },
};

