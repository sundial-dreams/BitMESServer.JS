import { InputType, Field, Float, Int } from "type-graphql";

@InputType({ description: "input InputMachine" })
export class InputMachine {
    @Field(() => String, { nullable: true }) name?: string;
    @Field(() => String, { nullable: true }) state?: string;
    @Field(() => String, { nullable: true }) chargeOf?: string;
    @Field(() => String, { nullable: true }) description?: string;
}

@InputType({ description: "input InputWorkpiece" })
export class InputWorkpiece {
    @Field(() => String, { nullable: true }) name?: string;
    @Field(() => String, { nullable: true }) description?: string;
    @Field(() => Float, { nullable: true }) price?: number;
    @Field(() => Float, { nullable: true }) processTotalTime?: number;
    @Field(() => String, { nullable: true }) deliveryDate?: string;
}

@InputType({ description: "input InputProcess" })
export class InputProcess {
    @Field(() => String, { nullable: true }) name?: string;
    @Field(() => String, { nullable: true }) description?: string;
    @Field(() => String, { nullable: true }) workpiece?: string;
    @Field(() => String, { nullable: true }) machine?: string;
    @Field(() => String, { nullable: true }) chargeOf?: string;
    @Field(() => Float, { nullable: true }) time?: number;
    @Field(() => String, { nullable: true }) beforeProcess?: string;
}

@InputType({ description: "input ScheduledParameter" })
export class ScheduledParameter {
    @Field(() => String) workpiece: string;
    @Field(() => String) process: string;
    @Field(() => String) machine: string;
    @Field(() => Float) time: number;
    @Field(() => Int) order: number;
}

@InputType({ description: "input InputScheduledParameter" })
export class InputScheduledParameter {
    @Field(() => [ScheduledParameter]) parameter: Array<ScheduledParameter>
}
