// data/gameData.js
import { Sword, Shield, Zap, Crosshair, Heart, Skull } from 'lucide-react';

export const gameData = {
  Assassin: {
    icon: <Skull size={32} />,
    heroes: ['Lancelot', 'Fanny', 'Hayabusa', 'Gusion', 'Ling', 'Benedetta']
  },
  Fighter: {
    icon: <Sword size={32} />,
    heroes: ['Alucard', 'Lapu-Lapu', 'Zilong', 'Chou', 'Yu Zhong', 'Dyroth']
  },
  Mage: {
    icon: <Zap size={32} />,
    heroes: ['Nana', 'Novaria', 'Pharsa', 'Kagura', 'Lunox', 'Valentina']
  },
  Tank: {
    icon: <Shield size={32} />,
    heroes: ['Franco', 'Tigreal', 'Atlas', 'Khufra', 'Johnson', 'Grock']
  },
  Support: {
    icon: <Heart size={32} />,
    heroes: ['Floryn', 'Mathilda', 'Angela', 'Estes', 'Rafaela', 'Diggie']
  },
  Marksman: {
    icon: <Crosshair size={32} />,
    heroes: ['Miya', 'Granger', 'Brody', 'Layla', 'Beatrix', 'Claude']
  }
};
