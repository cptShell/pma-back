import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class JWTPayloadDto {
  @ApiProperty({ example: '40af606c-c0bb-47d1-bc20-a2857242cde3', description: 'unique user ID' })
  @IsString()
  @IsNotEmpty()
  readonly userId!: UUIDType;

  @ApiProperty({ example: 'user001', description: 'Login user' })
  @IsString()
  @IsNotEmpty()
  readonly login!: string;
}
