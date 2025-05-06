import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProfile } from 'src/entities/ClientProfile';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ClientProfile)
    private clientRepo: Repository<ClientProfile>,
    private jwtService: JwtService,
  ) {}

  // ✅ Sign Up → Hash password and save user
  async signUp(data: { firstName: string; lastName: string; email: string; password: string; address?: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.clientRepo.create({
      ...data,
      password: hashedPassword,
    });

    return this.clientRepo.save(user);
  }

  // ✅ Sign In → Validate password, generate token
  async signIn(email: string, password: string) {
    const user = await this.clientRepo.findOneBy({ email });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    const token = this.jwtService.sign({ id: user.id, email: user.email });

    return {
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }
}
