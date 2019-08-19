import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providerList = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providerList);
  }
}

export default new ProviderController();
