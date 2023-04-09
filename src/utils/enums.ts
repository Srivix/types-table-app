export const enum DroppableLists {
    TYPESLIST = 'typesList',
    ENEMYTYPELIST = 'enemyTypeList',
    ATTACKTYPE = 'attackType',
  }

export const enum DamageEffectivenesses {
    UNEFFECTIVE = 0,
    VERYINEFFECTIVE = 1/4,
    INEFFECTIVE = 1/2,
    NORMAL = 1,
    EFFECTIVE = 2,
    SUPEREFFECTIVE = 4,
}

export const enum DamageEffectivenessStatus {
    UNEFFECTIVE = 'noDamge',
    VERYINEFFECTIVE = 'veryIneffective',
    INNEFECTIVE = 'ineffective',
    NORMAL = 'normal',
    EFFECTIVE =  'effective',
    SUPEREFFECTIVE = 'superEffective',
}