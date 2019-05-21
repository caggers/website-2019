export interface DataProps {
	title: string;
	subtitle?: string;
	text: string | Array<string>;
	icon: string;
	blogs?: Array<string>;
	isListing?: boolean;
  fullSize?: boolean;
  skills?: Array<string>
}