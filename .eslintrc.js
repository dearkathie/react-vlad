module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};

{
    "rules": {
        "react/jsx-filename-extension": [
            1,
            "extensions": [".js", ".jsx"]
        ],
        "prop-types": [
            0,
            { ignore: ["first_name", "last_name", "pollInterval", "text", "data", "data.map"] }
        ]
}
