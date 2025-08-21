import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { jwtConstants } from "./constants";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const token = this.Extracao_do_Header(request);

        if(!token){
            throw new UnauthorizedException('Token ausente');
        }

        try {
            const payload  = await this.jwtService.verifyAsync(token, { secret: jwtConstants.secret });

            request['usuario'] = payload;

        } catch {
            throw new UnauthorizedException('Token inválido');
        }
        return true;
    }

    private Extracao_do_Header(request: Request): string | undefined {
        const [type, token] = request.headers['authorization']?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
