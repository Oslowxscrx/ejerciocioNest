import { IsAlphanumeric, IsOptional, IsString } from "class-validator";

class FliterDto extends PaginationDto{
    @IsOptional()
    @IsString()
    readonly title;

    @IsOptional()
    @IsAlphanumeric()
    readonly code;
}