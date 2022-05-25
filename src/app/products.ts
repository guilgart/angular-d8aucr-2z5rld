export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  presentacion: string;
  peso: number;
}

export const products = [
  {
    id: 1,
    name: 'Pan de Mija',
    price: 6000,
    description: 'Uno de nuestros panes mas vendidos! para disfruta en familia.',
    presentacion: 'familiar',
    peso: 200
  },
  {
    id: 2,
    name: 'Pan de Queso',
    price: 6500,
    description: 'Delicioso y tradicional, pan relleno de queso perfecto para compartir al desayuno!',
    presentacion: 'tajado grande',
    peso: 250
  },
  {
    id: 3,
    name: 'Pan 7 granos Integral',
    price: 7500,
    description: 'Para quienes desean aumentar la fibra en sus dietas, este delicioso pan tiene en sus ingredientes al menos 100gr de 7 diferentes granos de cereal, perfecto para quienes necesitan un dieta rica en fibra.',
    presentacion: 'tajado grande',
    peso: 300
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/