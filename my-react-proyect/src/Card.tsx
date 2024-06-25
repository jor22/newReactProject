import { FC } from 'react';

type Props = {
	title: string;
	subTitle: string;
};

type Collaboration = {
	name: string;
};

type ComplexOBject = {
	name: string;
	surname: string;
	collaborations: Collaboration[];
};

export const Card: FC<Props> = (props) => {
	const fullTitle = (): ComplexOBject => {
		// return fullTitle;
		return {
			name: 'holi',
			surname: 'surname',
			collaborations: [{ name: 'holi2' }],
		};
	};

	return (
		<div>
			<div>{props.title}</div>
			<div>{props.subTitle}</div>
			<div>{fullTitle().collaborations[0].name}</div>
		</div>
	);
};
