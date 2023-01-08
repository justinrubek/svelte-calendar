{
  inputs,
  self,
  ...
} @ part-inputs: {
  imports = [];

  perSystem = {
    pkgs,
    lib,
    system,
    inputs',
    self',
    ...
  }: let
    devTools = [
      # javascript tooling
      pkgs.nodejs
    ];

    extraBuildInputs = [
    ];
    extraNativeBuildInputs = [
    ];

    allBuildInputs = base: base ++ extraBuildInputs;
    allNativeBuildInputs = base: base ++ extraNativeBuildInputs;
  in rec {
    devShells.default = pkgs.mkShell rec {
      buildInputs = allBuildInputs devTools;
      nativeBuildInputs = allNativeBuildInputs [];
      LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath buildInputs;
    };
  };
}
