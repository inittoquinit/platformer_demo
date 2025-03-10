const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.destroy,
		C3.Behaviors.Physics,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Platform.Acts.SetIgnoreInput
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{DMO: 0},
	{Ground: 0},
	{Solid: 0},
	{Wall: 0},
	{Keyboard: 0},
	{Spikes: 0},
	{Diamond: 0},
	{Door: 0},
	{DestroyOutsideLayout: 0},
	{Physics: 0},
	{Stars: 0},
	{Anchor: 0},
	{Text: 0},
	{DiamondScore: 0}
];

self.InstanceType = {
	DMO: class extends self.ISpriteInstance {},
	Ground: class extends self.ITiledBackgroundInstance {},
	Platform: class extends self.ITiledBackgroundInstance {},
	Wall: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	Spikes: class extends self.ITiledBackgroundInstance {},
	Diamond: class extends self.ISpriteInstance {},
	Door: class extends self.ISpriteInstance {},
	Stars: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}