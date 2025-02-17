//export class CreateProductDto {}

import { Product } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

// Interfaz en lugar de "type" para compatibilidad con Swagger
export class CreateProductDto
  implements Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
{
  @ApiProperty({ example: 'Laptop Gamer', description: 'Nombre del producto' })
  name: string;

  @ApiProperty({
    example: 'Computadora portátil de alto rendimiento',
    description: 'Descripción del producto',
  })
  description: string;

  @ApiProperty({ example: 2500.99, description: 'Precio del producto' })
  price: number;

  @ApiProperty({
    example:
      'https://www.kabifperu.com/imagenes/prod-24022021171348-laptop-asus-gl704g-i7-8750h-gl704gw-ev057t-gaming-17-i7-512sdd-16gb-rtx-2070-8g-w10-mochila-mouse-deta.png',
    description: 'Imagen del producto',
    nullable: true,
  })
  image: string | null;
}
