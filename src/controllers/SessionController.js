import Usuario from '../models/Usuario';

class SessionController
{
    async index(req, res)
    {
        const usuarios = await Usuario.find();

        return res.json(usuarios);
    }

    async store(req, res)
    {
        const { nome, email } = req.body;

        let usuario = await Usuario.findOne({email});

        if (!usuario) {
            usuario = await Usuario.create({nome, email});
        }

        return res.json(usuario);
    }

    async update(req, res)
    {
        const { usuario_id, nome , email } = req.body;

        let usuario = await Usuario.updateOne({ id: usuario_id }, { nome, email });

        return res.json(usuario);
    }

    async destroy(req, res)
    {
        const { usuario_id } = req.body;

        let usuario = await Usuario.findByIdAndDelete(usuario_id);

        return res.json(usuario);
    }
}

export default new SessionController;