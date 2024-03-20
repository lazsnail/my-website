/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: "#00a2ff",
                secondary: "#006FB6",
                accent: "#f37748"
            },
            boxShadow: {
                'box-white': `1px 1px 0 rgb(255,255,255), 
                            2px 2px 0px rgb(255,255,255),
                            3px 3px 0px rgb(255,255,255),
                            4px 4px 0px rgb(255,255,255),
                            5px 5px 0px rgb(255,255,255),
                            6px 6px 0px rgb(255,255,255)
                            `,
                'box-black': `0px 1px 0px rgb(0,0,0), 
                            0px 2px 0px rgb(0,0,0),
                            0px 3px 0px rgb(0,0,0),
                            0px 4px 0px rgb(0,0,0),
                            0px 5px 0px rgb(0,0,0)
                            `,
                'box-black-video': `1px 1px 0px rgb(0,0,0), 
                            2px 2px 0px rgb(0,0,0),
                            3px 3px 0px rgb(0,0,0),
                            4px 4px 0px rgb(0,0,0),
                            5px 5px 0px rgb(0,0,0)
                            `,
                'box-black-hover': `0px 1px 0px rgb(0,0,0), 
                                    0px 2px 0px rgb(0,0,0),
                                    0px 3px 0px rgb(0,0,0),
                                    0px 4px 0px rgb(0,0,0),
                                    0px 5px 0px rgb(0,0,0),
                                    0px 6px 0px rgb(0,0,0),
                                    0px 7px 0px rgb(0,0,0)
                                    `,
            },
        },
	},
	plugins: [],
}
