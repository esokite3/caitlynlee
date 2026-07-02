import type { SkillLogo } from './types'

import python from '../assets/logos/python.svg'
import java from '../assets/logos/java.svg'
import typescript from '../assets/logos/typescript.svg'
import javascript from '../assets/logos/javascript.svg'
import cplusplus from '../assets/logos/cplusplus.svg'
import react from '../assets/logos/react.svg'
import tailwindcss from '../assets/logos/tailwindcss.svg'
import tensorflow from '../assets/logos/tensorflow.svg'
import pytorch from '../assets/logos/pytorch.svg'
import pandas from '../assets/logos/pandas.svg'
import numpy from '../assets/logos/numpy.svg'
import git from '../assets/logos/git.svg'
import aws from '../assets/logos/amazonwebservices.svg'
import jupyter from '../assets/logos/jupyter.svg'

/**
 * Curated official logos for the compact About skill row. Order groups
 * languages → frameworks → ML/data → tools, and stays deliberately short to
 * preserve whitespace.
 */
export const skillLogos: SkillLogo[] = [
  { name: 'Python', src: python },
  { name: 'Java', src: java },
  { name: 'TypeScript', src: typescript },
  { name: 'JavaScript', src: javascript },
  { name: 'C/C++', src: cplusplus },
  { name: 'React', src: react },
  { name: 'Tailwind CSS', src: tailwindcss },
  { name: 'TensorFlow', src: tensorflow },
  { name: 'PyTorch', src: pytorch },
  { name: 'Pandas', src: pandas },
  { name: 'NumPy', src: numpy },
  { name: 'Git', src: git },
  { name: 'AWS', src: aws },
  { name: 'Jupyter', src: jupyter },
]
