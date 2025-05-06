import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: any) {
    return this.authService.signUp(body);
  }

  @Post('signin')
  async signIn(@Body() body: any) {
    return this.authService.signIn(body.email, body.password);
  }
}
