import * as React from 'react';
const spinnerImage = `<svg class="lds-spin" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(82,50)">
    <g transform="rotate(0)">
        <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="1" transform="scale(1.0798 1.0798)">
            <animateTransform attributeName="transform" type="scale" begin="-0.7000000000000001s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="-0.7000000000000001s"></animate>
        </circle>
    </g>
</g><g transform="translate(72.62741699796952,72.62741699796952)">
        <g transform="rotate(45)">
            <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="0.875" transform="scale(1.2298 1.2298)">
                <animateTransform attributeName="transform" type="scale" begin="-0.6000000000000001s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="-0.6000000000000001s"></animate>
            </circle>
        </g>
    </g><g transform="translate(50,82)">
        <g transform="rotate(90)">
            <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="0.75" transform="scale(1.3798 1.3798)">
                <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
            </circle>
        </g>
    </g><g transform="translate(27.37258300203048,72.62741699796952)">
        <g transform="rotate(135)">
            <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="0.625" transform="scale(1.5298 1.5298)">
                <animateTransform attributeName="transform" type="scale" begin="-0.4s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="-0.4s"></animate>
            </circle>
        </g>
    </g><g transform="translate(18,50.00000000000001)">
        <g transform="rotate(180)">
            <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="0.5" transform="scale(1.6798 1.6798)">
                <animateTransform attributeName="transform" type="scale" begin="-0.30000000000000004s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="-0.30000000000000004s"></animate>
            </circle>
        </g>
    </g><g transform="translate(27.372583002030474,27.37258300203048)">
        <g transform="rotate(225)">
            <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="0.375" transform="scale(1.8298 1.8298)">
                <animateTransform attributeName="transform" type="scale" begin="-0.2s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="-0.2s"></animate>
            </circle>
        </g>
    </g><g transform="translate(49.99999999999999,18)">
        <g transform="rotate(270)">
            <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="0.25" transform="scale(1.9798 1.9798)">
                <animateTransform attributeName="transform" type="scale" begin="-0.1s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="-0.1s"></animate>
            </circle>
        </g>
    </g><g transform="translate(72.62741699796952,27.372583002030474)">
        <g transform="rotate(315)">
            <circle cx="0" cy="0" r="4" fill="#4caf50" fill-opacity="0.125" transform="scale(2.1298 2.1298)">
                <animateTransform attributeName="transform" type="scale" begin="0s" values="2.2 2.2;1 1" keyTimes="0;1" dur="0.8s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.8s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
            </circle>
        </g>
    </g></svg>`;

export const Spinner = () => (
  <div
    style={{ width: '32px', height: '32px' }}
    dangerouslySetInnerHTML={{ __html: spinnerImage }}
  />
);
