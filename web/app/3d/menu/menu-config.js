export const file = {
  label: 'file',
  actions: ['save', 'exportStl', 'uploadToThingiverse']
};

export const craft = {
  label: 'craft',
  cssIcons: ['magic'],
  info: 'set of available craft operations on a solid',
  actions: ['PAD', 'CUT']
};

export const primitives = {
  label: 'add',
  cssIcons: ['cube', 'plus'],
  info: 'set of available solid creation operations',
  actions: ['PLANE', 'BOX', 'SPHERE']
};

export const boolean = {
  label: 'bool',
  cssIcons: ['pie-chart'],
  info: 'set of available boolean operations',
  actions: ['INTERSECTION', 'DIFFERENCE', 'UNION']
};

export const main = {
  label: 'start',
  cssIcons: ['rocket'],
  info: 'common set of actions',
  actions: ['PAD', 'CUT', '-', 'INTERSECTION', 'DIFFERENCE', 'UNION', '-', 'PLANE', 'BOX', 'SPHERE', '-',
    'EditFace', '-', 'DeselectAll', 'RefreshSketches'  ]
};

