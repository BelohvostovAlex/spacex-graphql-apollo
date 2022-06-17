import { Rocket } from '../../generated/graphql';

export interface RocketBlockProps extends Rocket {
  onClick: (id: string) => void;
}
