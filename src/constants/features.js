import { v4 } from 'uuid';

const FEATURES = [
	{
		id: v4(),
		icon: '/assets/images/icon-square.svg',
		title: 'Expert-Led Content',
		body: 'Gain access to exclusive written and video content created by Microsoft Learn Student Ambassadors and Microsoft Staff. Learn from the best in the industry on topics relevant to becoming a successful Student Ambassador.'
	},
	{
		id: v4(),
		icon: '/assets/images/icon-brackets.svg',
		title: 'Skill Development',
		body: 'Develop essential soft skills like communication, leadership, community building, and advocacy. Sharpen your technical skills in Microsoft technologies through focused training resources.'
	},
	{
		id: v4(),
		icon: '/assets/images/icon-check-list.svg',
		title: 'Hands-on Experience',
		body: ' Get practical experience by completing real-world activities typically performed by Student Ambassadors. This prepares you for the program and builds your confidence.'
	}
];

export { FEATURES };
